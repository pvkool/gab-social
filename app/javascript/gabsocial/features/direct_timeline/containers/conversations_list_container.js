import ConversationsList from '../components/conversations_list';
import { expandConversations } from '../../../actions/conversations';

const mapStateToProps = state => ({
  conversations: state.getIn(['conversations', 'items']),
  isLoading: state.getIn(['conversations', 'isLoading'], true),
  hasMore: state.getIn(['conversations', 'hasMore'], false),
});

const mapDispatchToProps = dispatch => ({
  onLoadMore: maxId => dispatch(expandConversations({ maxId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationsList);
