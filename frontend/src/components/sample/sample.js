import React from 'react';

class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false, instrument: this.props.instrument, changing: false};
        this.changeSample = this.changeSample.bind(this);
    }

  componentDidMount(){
    // debugger
    this.props.fetchSamples(this.state.instrument)
        .then(() => this.props.fetchDrums())
        .then(() => this.setState({loaded: true}));
  }

  changeSample(newInstrument){
      this.setState({loaded: false, instrument: newInstrument, changing: true});
  }

  componentDidUpdate(){
    // debugger
    if ((this.props.instrument !== this.state.instrument) && (!this.state.changing)) {
        this.changeSample(this.props.instrument);
    }

    if (this.state.changing === true){
        this.state.changing = false;
        this.props.fetchSamples(this.state.instrument)
            .then(() => this.props.fetchDrums())
            .then(() => this.setState({loaded: true}));
    }
  }

  render() {
    if (Object.keys(this.props.samples).length !== 2 || this.state.loaded === false){
        // debugger
        return (
            <div>
                <div className="instrument-select" onClick={() => this.changeSample("bell")}> BELL </div><br/>
                <div className="instrument-select" onClick={() => this.changeSample("piano")}> PIANO </div><br/>
                <div className="instrument-select" onClick={() => this.changeSample("voice")}> VOICE </div>
            </div>
        );
    } else {
        // debugger
        return (
        <div className="sampleComponent">
            {this.props.samples[this.state.instrument].map((sample, idx) => (
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
            <div className="instrument-select" onClick={() => this.changeSample("bell")}> BELL </div><br/>
            <div className="instrument-select" onClick={() => this.changeSample("piano")}> PIANO </div><br/>
            <div className="instrument-select" onClick={() => this.changeSample("voice")}> VOICE </div>
        </div>
        )
    }
  }
}

export default Sample;