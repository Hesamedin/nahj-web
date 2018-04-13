import * as React from 'react';
import { connect } from 'react-redux';
import '../styles/bodyStyle.css';
import SidebarPanel from './sidebar/SidebarPanel';
import { NahjReduxState } from '../reducers';
import Article from '../models/article';

interface BodyComponentProps {
    name: string;
    articleId: number;
    articles: Article[];
}

class BodyComponent extends React.Component<BodyComponentProps> {

    public render() {
        const articleId = this.props.articleId;
        const article = this.props.articles.find(x => x.id === articleId);

        return (
            /* <!-- Main container --> */
            <nav className="level body-container">
                {/* <!-- Left side --> */}
                <div className="level-left">
                    <div className="level-item">
                        {article}
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
    articleId: state.content.articleId,
    articles: state.firebase.letters
});

export default connect(mapStateToProps)(BodyComponent);