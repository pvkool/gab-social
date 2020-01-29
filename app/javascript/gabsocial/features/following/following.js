import ImmutablePureComponent from 'react-immutable-pure-component';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { debounce } from 'lodash';
import { FormattedMessage } from 'react-intl';
import {
  fetchAccount,
  fetchFollowing,
  expandFollowing,
  fetchAccountByUsername,
} from '../../actions/accounts';
import { me } from '../../initial_state';
import AccountContainer from '../../containers/account_container';
import ColumnIndicator from '../../components/column_indicator';
import Column from '../../components/column';
import ScrollableList from '../../components/scrollable_list';

const mapStateToProps = (state, { params: { username } }) => {
  const accounts = state.getIn(['accounts']);
  const accountFetchError = (state.getIn(['accounts', -1, 'username'], '').toLowerCase() == username.toLowerCase());

  let accountId = -1;
  if (accountFetchError) {
    accountId = null;
  } else {
    let account = accounts.find(acct => username.toLowerCase() == acct.getIn(['acct'], '').toLowerCase());
    accountId = account ? account.getIn(['id'], null) : -1;
  }

  const isBlocked = state.getIn(['relationships', accountId, 'blocked_by'], false);
  const isLocked = state.getIn(['accounts', accountId, 'locked'], false);
  const isFollowing = state.getIn(['relationships', accountId, 'following'], false);
  const unavailable = (me == accountId) ? false : (isBlocked || (isLocked && !isFollowing));

  return {
    accountId,
    unavailable,
    isAccount: !!state.getIn(['accounts', accountId]),
    accountIds: state.getIn(['user_lists', 'following', accountId, 'items']),
    hasMore: !!state.getIn(['user_lists', 'following', accountId, 'next']),
  };
};



export default @connect(mapStateToProps)
class Following extends ImmutablePureComponent {

  static propTypes = {
    params: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    accountIds: ImmutablePropTypes.list,
    hasMore: PropTypes.bool,
    isAccount: PropTypes.bool,
    unavailable: PropTypes.bool,
  };

  componentWillMount () {
    const { params: { username }, accountId } = this.props;

    if (accountId && accountId !== -1) {
      this.props.dispatch(fetchAccount(accountId));
      this.props.dispatch(fetchFollowing(accountId));
    } else {
      this.props.dispatch(fetchAccountByUsername(username));
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.accountId && nextProps.accountId !== -1 && (nextProps.accountId !== this.props.accountId && nextProps.accountId)) {
      this.props.dispatch(fetchAccount(nextProps.accountId));
      this.props.dispatch(fetchFollowing(nextProps.accountId));
    }
  }

  handleLoadMore = debounce(() => {
    if (this.props.accountId && this.props.accountId !== -1) {
      this.props.dispatch(expandFollowing(this.props.accountId));
    }
  }, 300, { leading: true });

  render () {
    const { accountIds, hasMore, isAccount, accountId, unavailable } = this.props;

    if (!isAccount && accountId !== -1) {
      return ( <ColumnIndicator type='missing' /> );
    } else if (accountId === -1 || (!accountIds)) {
      return ( <ColumnIndicator type='loading' /> );
    } else if (unavailable) {
      return (<ColumnIndicator type='error' message={<FormattedMessage id='empty_column.account_unavailable' defaultMessage='Profile unavailable' />} />);
    }

    return (
      <Column>
        <ScrollableList
          scrollKey='following'
          hasMore={hasMore}
          onLoadMore={this.handleLoadMore}
          emptyMessage={<FormattedMessage id='account.follows.empty' defaultMessage="This user doesn't follow anyone yet." />}
        >
          {accountIds.map(id =>
            <AccountContainer key={id} id={id} withNote={false} />
          )}
        </ScrollableList>
      </Column>
    );
  }

}