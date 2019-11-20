import React from 'react';

class Sample extends React.Component {

  componentDidMount(){
    this.props.fetchSamples();
  }

  render() {
    if (Object.keys(this.props.samples).length === 0){
        return null;
    } else {
        // debugger
        return (
        <div>
            {this.props.samples.map((sample, idx) => (
                <div>
                    <audio id={`sample-${idx}`}>
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