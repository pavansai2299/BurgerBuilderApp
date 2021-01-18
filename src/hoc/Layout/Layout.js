import React,{Component} from 'react';

import Auxi from '../Auxi/auxi';

import classes from './Layout.module.css';

import Toolbar from'../../components/Navigation/Toolbar/Toolbar';

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
         this.setState({showSideDrawer:false});
    }

    toolBarOpenedHandler = () => {
        this.setState(prevState => {
            return {showSideDrawer:!prevState.showSideDrawer};
         });
    }

    render(){
        return(
        <Auxi>
            <Toolbar drawerToggleClicked={this.toolBarOpenedHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
            <main className={classes.Content}>
                { this.props.children }
            </main>
        </Auxi>
        )
    }
       
};

export default Layout;