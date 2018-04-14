import * as React from 'react';
import { connect } from 'react-redux';
import SidebarPanel from './sidebar/SidebarPanel';
import { NahjReduxState } from '../reducers';
import article from '../models/article';
import '../styles/bodyStyle.css';

interface BodyComponentProps {
    name: string;
    article: article;
}

class BodyComponent extends React.Component<BodyComponentProps> {

    public render() {
        const art = this.props.article;

        return (
            /* <!-- Main container --> */
            <nav className="level body-container">
                {/* <!-- Left side --> */}
                <div className="level-left">
                    <div className="level-item">
                        <nav className="panel content-block">
                            <p className="panel-heading">{art.title}</p>
                            {/*<div className="panel-block">{art.description}</div>*/}
                            {/*<div className="panel-block" dangerouslySetInnerHTML={{__html: art.description}}>*/}
                            <div className="panel-block">
                                <p className="panel-block">This is test paragraph. sdfsdfsdf sdfsdf sdfsdf
                                    sdfsd sdfs sdf sdf sdf</p>
                                <p className="panel-block">This is test paragraph. sdfsdfsdf sdfsdf sdfsdf
                                    sdfsd sdfs sdf sdf sdf</p>
                                <p className="panel-block">This is test paragraph. sdfsdfsdf sdfsdf sdfsdf
                                    sdfsd sdfs sdf sdf sdf</p>
                                <p className="panel-block">This is test paragraph. sdfsdfsdf sdfsdf sdfsdf
                                    sdfsd sdfs sdf sdf sdf</p>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* <!-- Right side --> */}
                <div className="level-right">
                    <div className="level-item sidebar-item">
                        <SidebarPanel title={this.props.name}/>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state: NahjReduxState) => ({
    article: state.content.article,
});

export default connect(mapStateToProps)(BodyComponent);