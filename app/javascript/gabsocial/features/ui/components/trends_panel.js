import { NavLink, withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { fetchTrends } from '../../../actions/trends';
import ImmutablePureComponent from 'react-immutable-pure-component';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Icon from 'gabsocial/components/icon';
import Hashtag from '../../../components/hashtag';

class TrendsPanel extends ImmutablePureComponent {

  static propTypes = {
    trends: ImmutablePropTypes.list.isRequired,
    fetchTrends: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
  };

  componentDidMount () {
    this.props.fetchTrends();
  }

  render() {
    const { trends } = this.props;

    if (trends.isEmpty()) {
      return null;
    }

    return (
      <div className='wtf-panel'>
        <div className='wtf-panel-header'>
          <Icon id='hashtag' className='wtf-panel-header__icon' />
          <span className='wtf-panel-header__label'>
            <FormattedMessage id='trends.title' defaultMessage='Trends' />
          </span>
        </div>
        <div className='wtf-panel__content'>
          <div className='wtf-panel__list'>
            {trends && trends.map(hashtag => (
              <Hashtag key={hashtag.get('name')} hashtag={hashtag} />
            ))}
          </div>
        </div>
        </div>
      )
    };
};


const mapStateToProps = state => ({
  trends: state.getIn(['trends', 'items']),
});

const mapDispatchToProps = dispatch => {
  return {
    fetchTrends: () => dispatch(fetchTrends()),
  }
};

export default injectIntl(
  connect(mapStateToProps, mapDispatchToProps, null, {
    forwardRef: true,
  }
)(TrendsPanel))
