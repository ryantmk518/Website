
class MyText extends React.Component { 
    constructor(prompt) {
         super(props); 
         this.state = { bold : false, color : 'black'}; 
        }  
              handleMouseOver() 
        { 
            this.setState( {bold : true} ); 
        } 
            handleMouseOut() 
        { 
            this.setState( { bold: false }); 
        } 
            handleClick() { 
            if (this.state.color == 'red') 
            this.setState({ color: 'black'} );
              else this.setState( { color: 'red'}); 
        }    
         
        render()
        {
            var myColor = this.state.color;
            var weight = this.state.bold ? 'bold' : 'normal';
            return(
                <span style =
                { 
                    { color: myColor, fontWeight:weight }
                }
                onClick = {this.handleClick.bind(this)}
                onMouseOver = {this.handleMouseOver.bind(this)}
                onMouseOut = {this.handleMouseOut.bind(this)}>
                {this.props.text}
                ></span>
            );
        }
    };
    const domContainer = document.querySelector('#like_button_container');
    ReactDOM.render(e(LikeButton), domContainer);   