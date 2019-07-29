import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import ImmutablePureComponent from 'react-immutable-pure-component';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { debounce } from 'lodash';
import LoadingIndicator from '../../components/loading_indicator';
import Column from '../ui/components/column';
import AccountContainer from '../../containers/account_container';
import { fetchBlocks, expandBlocks } from '../../actions/blocks';
import ScrollableList from '../../components/scrollable_list';

const messages = defineMessages({
  heading: { id: 'column.blocks', defaultMessage: 'Blocked users' },
});

const mapStateToProps = state => ({
  accountIds: state.getIn(['user_lists', 'blocks', 'items']),
  hasMore: !!state.getIn(['user_lists', 'blocks', 'next']),
});

export default @connect(mapStateToProps)
@injectIntl
class Blocks extends ImmutablePureComponent {

  static propTypes = {
    params: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    accountIds: ImmutablePropTypes.list,
    hasMore: PropTypes.bool,
    intl: PropTypes.object.isRequired,
  };

  componentWillMount () {
    this.props.dispatch(fetchBlocks());
  }

  handleLoadMore = debounce(() => {
    this.props.dispatch(expandBlocks());
  }, 300, { leading: true });

  render () {
    const { intl, accountIds, hasMore } = this.props;

    if (!accountIds) {
      return (
        <Column>
          <LoadingIndicator />
        </Column>
      );
    }

    const emptyMessage = <FormattedMessage id='empty_column.blocks' defaultMessage="You haven't blocked any users yet." />;

    return (
      <Column icon='ban' heading={intl.formatMessage(messages.heading)} backBtnSlim>
        <ScrollableList
          scrollKey='blocks'
          onLoadMore={this.handleLoadMore}
          hasMore={hasMore}
          emptyMessage={emptyMessage}
        >
          {accountIds.map(id =>
            <AccountContainer key={id} id={id} />
          )}
        </ScrollableList>
      </Column>
    );
  }

}
