import React from 'react';

class Sample extends React.Component {

  componentDidMount(){
    this.props.fetchSamples();
  }

  render() {
    if (Object.keys(this.props.samples).length === 0){
        return null;
    } else {
        debugger
        return (
        <div>
            {this.props.samples.map(sample => (
                <div>
                    <audio id="audio"controls controlsList="nodownload">
                        <source src={sample.url} type="audio/mp3"/>
                    </audio> {sample.name}
                    <br/>
                </div>
            ))}
        </div>
        )
    }
  }
}

export default Sample;