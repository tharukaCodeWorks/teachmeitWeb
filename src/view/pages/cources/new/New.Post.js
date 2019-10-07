import { Component } from "react";
import { Responsive } from "semantic-ui-react";

class DesktopContainer extends Component{
  render(){
    <Responsive minWidth={ Responsive.onlyMobile.minWidth }>

    </Responsive>
  }
}

class TabletContainer extends Component{
  render(){
    <Responsive minWidth={ Responsive.onlyTablet.minWidth }>

      </Responsive>
  }
}

class MobileContainer extends Component{
  render(){
    return (
      <Responsive minWidth={ Responsive.onlyMobile.minWidth }>

      </Responsive>
    );
  }
}

class NewPostLayout extends Component{
  render(){
    return (
      <div>
        <DesktopContainer />
        <TabletContainer />
        <MobileContainer />
      </div>
    );
  }
}
