import React from 'react';

class Sample extends React.Component {

  componentDidMount(){
    this.props.fetchSamples("bell");
    this.props.fetchDrums();
  }

  render() {
    if (Object.keys(this.props.samples).length !== 2 ){
        return null;
    } else {
        // debugger
        return (
        <div className="sampleComponent">
            {this.props.samples.bell.map((sample, idx) => (
                <div>
                    <audio controls id={`sample-${idx}`}>
                        <source src={sample.url} type="audio/mp3"/>
                    </audio>
                    <br/>
                </div>
            ))}
            {this.props.samples.drums.map((sample, idx) => (
                <div>
                    <audio controls id={`drum-${idx}`}>
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