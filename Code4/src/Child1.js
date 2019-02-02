import React from 'react';

export class Child1 extends React.Component{
    constructor(){
        super();
        console.log("Child1Constructor call");
        this.data = [];
        this.state ={data:this.data};
    }
    componentWillMount(){
        fetch('https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json').then(res=>{
            res.json().then(data=>{
                console.log("Data :::: ",data['mobiles']);
                    this.setState({data:data['mobiles']});
            }).catch(err=>{
                console.log("Error is ",err);
            }).catch(e=>{
                console.log("Server Error is ",e);
            });
        })
        console.log("Child1 Before Render Call");
    }
    componentDidMount(){
        console.log("Child1 After Render Call");
    }
    componentWillUnmount(){
        console.log("Child1 UnMount")
    }
    render(){
        console.log("Child1 render call");
        return (
            <div>
                <button>Child1 Ajax 
                     </button>
                     {this.state.data.map((m,index)=>{
                    return (<p key={index}>{m.id} {m.name}</p>)
                    })}
            </div>
        )
    }
}