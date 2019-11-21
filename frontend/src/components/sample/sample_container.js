import { connect } from 'react-redux';
import { fetchSamples, fetchDrums } from '../../actions/sample_actions';
import Sample from './sample';

const mapStateToProps = (state) => {
  return {
    samples: state.samples
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSamples: (instrument) => dispatch(fetchSamples(instrument)),
    fetchDrums: () => dispatch(fetchDrums())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sample);