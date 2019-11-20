import { connect } from 'react-redux';
import { fetchSamples } from '../../actions/sample_actions';
import Sample from './sample';

const mapStateToProps = (state) => {
  return {
    samples: state.samples
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSamples: () => dispatch(fetchSamples())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sample);