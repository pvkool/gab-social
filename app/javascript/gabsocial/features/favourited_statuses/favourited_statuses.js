import ImmutablePropTypes from 'react-immutable-proptypes';
import { FormattedMessage } from 'react-intl';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { debounce } from 'lodash';
import { fetchFavouritedStatuses, expandFavouritedStatuses } from '../../actions/favourites';
import { meUsername } from '../../initial_state';
import Column from '../../components/column';
import StatusList from '../../components/status_list';
import ColumnIndicator from '../../components/column_indicator';

const mapStateToProps = (state, { params: { username } }) => {
  return {
    isMyAccount: (username.toLowerCase() === meUsername.toLowerCase()),
    statusIds: state.getIn(['status_lists', 'favourites', 'items']),
    isLoading: state.getIn(['status_lists', 'favourites', 'isLoading'], true),
    hasMore: !!state.getIn(['status_lists', 'favourites', 'next']),
  };
};

export default @connect(mapStateToProps)
class Favourites extends ImmutablePureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    statusIds: ImmutablePropTypes.list.isRequired,
    hasMore: PropTypes.bool,
    isLoading: PropTypes.bool,
    isMyAccount: PropTypes.bool.isRequired,
  };

  componentWillMount () {
    this.props.dispatch(fetchFavouritedStatuses());
  }

  handleLoadMore = debounce(() => {
    this.props.dispatch(expandFavouritedStatuses());
  }, 300, { leading: true })

  render () {
    const { statusIds, hasMore, isLoading, isMyAccount } = this.props;

    if (!isMyAccount) {
      return ( <ColumnIndicator type='missing' /> );
    }

    return (
      <Column>
        <StatusList
          statusIds={statusIds}
          scrollKey='favourited_statuses'
          hasMore={hasMore}
          isLoading={isLoading}
          onLoadMore={this.handleLoadMore}
          emptyMessage={<FormattedMessage id='empty_column.favourited_statuses' defaultMessage="You don't have any favourite gabs yet. When you favourite one, it will show up here." />}
        />
      </Column>
    );
  }

}