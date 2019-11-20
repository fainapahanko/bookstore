import React from 'react'
import { Badge } from 'reactstrap';

// const MyBadge = (props) => {
//   return (
//     <div>
//       <h1>Heading <Badge color="secondary">New</Badge></h1>
//     </div>
//   );
// }
class MyBadge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "badge",
      color: "info"
    };
  }
  render(){
    return(
        <div>
          <Badge color={this.state.color}>{this.state.title}</Badge>
        </div>
    )
  }
}


export default MyBadge
