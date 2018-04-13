import * as React from 'react';
import '../styles/bodyStyle.css';
import SidebarPanel from './sidebar/SidebarPanel';

interface BodyComponentProps {
    name: string;
}

class BodyComponent extends React.Component<BodyComponentProps> {

    public render() {
        return (
            /* <!-- Main container --> */
            <nav className="level body-container">
                {/* <!-- Left side --> */}
                <div className="level-left">
                    <div className="level-item">
                        This is left
                    </div>
                </div>

                {/* <!-- Right side --> */}
                <div className="level-right">
                    <div className="level-item sidebar-item">
                            <SidebarPanel  title={this.props.name} />
                    </div>
                </div>
            </nav>
        );
    }
}

export default BodyComponent;