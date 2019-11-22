import React from 'react';

class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false};
    }

  componentDidMount(){
    this.props.fetchSamples("bell")
        .then(() => this.props.fetchDrums())
        .then(() => this.setState({loaded: true}));
  }

  render() {
    if (Object.keys(this.props.samples).length !== 2 ){
    // if (!this.state.loaded) {
        return null;
    } else {
        // debugger
        return (
        <div className="sampleComponent">
            {this.props.samples.bell.map((sample, idx) => (
                <div key={idx}>
                    <audio id={`sample-${idx}`}>
                        <source src={sample.url} type="audio/mp3"/>
                    </audio>
                    <br/>
                </div>
            ))}
            {this.props.samples.drums.map((sample, idx) => (
                <div key={idx}>
                    <audio id={`drum-${idx}`}>
                        <source src={sample.url} type="audio/mp3"/>
                    </audio>
                    <br/>
                </div>
            ))}
        </div>
        )
    }
  }
}

export default Sample;