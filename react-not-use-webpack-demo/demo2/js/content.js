ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('content'));


var content1 = <h1>Hello, world!----------------</h1>; //变量名使用小写开头
ReactDOM.render(content1, document.getElementById('content1'));


var Content2 = React.createClass({  //变量名使用大写开头
    render: function () {
        return (
            <h1>Hello, world!</h1>
        );
    }
});

ReactDOM.render(<Content2 />, document.getElementById('content2'));


class Content3 extends React.Component {
    render() {
        return (
            <h1>-----------Hello, world!</h1>
        );
    }
}

ReactDOM.render(<Content3 />, document.getElementById('content3'));
