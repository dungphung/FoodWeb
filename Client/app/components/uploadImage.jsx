var React = require('react');
var {connect} = require('react-redux');
var $ = require('jquery');
var axios = require('axios');
var Dropzone = require('react-dropzone');
var sha1 = require('sha1');
var superagent = require('superagent')

var UpLoadImage = React.createClass({
    getInitialState: function() {
        return {
            images: []
        }
    }, 
   uploadFile: function(files) {
        console.log('uploadFile: ');
        var image = files;
        console.log(image);
        var cloudName = 'doancuoiki';
        var url = 'https://api.cloudinary.com/v1_1/'+ cloudName + '/image/upload';

        var timestamp = Date.now()/1000;
        var uploadPreset = 'pvdung';

        var paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + 
                        uploadPreset + 'e68qaWrrPTkhExBJsAW4ngQrQvw';
        var signature = sha1(paramsStr);

        var params = {
            'api_key': '894259973189773',
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }

        
        files.forEach(image => {
            var uploadRequest = superagent.post(url);
            uploadRequest.attach('file', image);
            
            Object.keys(params).forEach((key) => {
                uploadRequest.field(key, params[key])
            });

            uploadRequest.end( (err, resp) => {
                if (err) {
                    alert(err, null);
                    return;
                }
                console.log('UPLOAD COMPLETE: ', JSON.stringify(resp.body));
                var uploaded = resp.body;
                
                var updatedImages = Object.assign([], this.state.images)
                updatedImages.push(uploaded);
                this.setState({
                    images: updatedImages
                })
            })
        })

        
   },
   removeImage: function(e) {
        e.preventDefault();

        console.log('removeImage');

        var updatedImages = Object.assign([], this.state.images)
            updatedImages.splice(e.target.id, 1);
            this.setState({
                images: updatedImages
            })

   },
    render: function() {
        var list = this.state.images.map((image, k) => {
            return (
                <li key={k}>
                    <img style={{width:128}}  src={image.secure_url} alt=""/>
                    <br/>
                    <a href="#" onClick={this.removeImage}>remove</a>
                </li>
            )
        })

        return (
            <div>
                <h2>Upload Images</h2>
                <Dropzone  onDrop={this.uploadFile}/>
                <ol>
                    { list }
                </ol>
            </div>
        )
    }
});

module.exports = connect()(UpLoadImage);