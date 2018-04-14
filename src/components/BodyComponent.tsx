import * as React from 'react';
import { connect } from 'react-redux';
import SidebarPanel from './sidebar/SidebarPanel';
import { NahjReduxState } from '../reducers';
import article from '../models/article'
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
                    <div className="level-item content-block">
                        <section className="section">
                            <div className="container">
                                <h1 className="title">{art.title}</h1>
                                <br />
                                <h2 className="subtitle">{art.description}</h2>
                            </div>
                        </section>
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