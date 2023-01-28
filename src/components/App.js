import React from 'react';
import Searchbar from './searchbar/Searchbar';
import youtube from '../apis/Youtube';
import VideoList from './video-list/VideoList';
import VidepoDetail from './video-detail/VideoDetail';
import './App.css';

class App extends React.Component{
    state = {
        videos: [],
        selectedVideo: null
    };
    componentDidMount(){
        this.onTermSubmit('Kailash Nadh')
    }
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search',{
            params: {
                q: term
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }
    render(){
        return(
            <div className='main'>
                <Searchbar onFormSubmit={this.onTermSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VidepoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className='five wide column'>
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;