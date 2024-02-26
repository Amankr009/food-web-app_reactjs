import React from "react";
import {PROFILE_URL} from "../utils/constant";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            userInfo: {}
        }
        //console.log("Child consrtuctor of Class Component");
    }

    async componentDidMount() {
        //console.log("Child componentDidMount of Class Component");

        const profileData = await fetch(PROFILE_URL);
        const json = await profileData.json();

        this.setState({
            userInfo: json
        })

        this.checkOnPageChanges = setInterval(() => {
            //console.log("Interval in Class Component");
        },1000);
    }

    componentDidUpdate() {
        //console.log("Child componentDidUpdate of Class Component")
    }

    componentWillUnmount() {
        //console.log("Child componnentDidUnmount of Class Component");
        clearInterval(this.checkOnPageChanges);
    }

    render() {
        const {type} = this.props;
        const {count} = this.state;
        const {name, avatar_url} = this.state.userInfo;

        //console.log("Child render of Class Component")

        return (
            <div className="user-card">
                <div className="profile">
                    <img src={avatar_url} />
                    <div className="user-name">{name}</div>
                </div>
                <div>Info: Getting name with the help of {type} Component</div>
                <h4>Count from Class: {count}</h4>
                <button className="border px-2 bg-gray-500 rounded" onClick={() => this.setState({count: this.state.count+1})}>Increase Count</button>
                <div>
                    Default User:
                    <UserContext.Consumer>
                        {({defaultUser}) => <span>{" "+defaultUser}</span>}
                    </UserContext.Consumer>
                </div>
            </div>
        )
    }
}

export default UserClass;