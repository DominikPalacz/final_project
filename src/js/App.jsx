import React from 'react';
import './../sass/main.scss';
import WebsiteTemplate from './WebsiteTemplate.jsx';
import WebsiteTemplateLtc from './WebsiteTemplateLtc.jsx';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

/** react router */

class exampleLTC extends React.Component {

    render() {
        return (
            <WebsiteTemplateLtc/>
        )
    }
}

class NotFound extends React.Component {
    render() {
        return <p>404, Nothing is here </p>;
    }
}

/** react router */

class App extends React.Component {

    render() {
        return (
            <HashRouter>

                    <div>
                        <Switch>
                            <Route exact path='/' component={WebsiteTemplate}/>
                            <Route path='/ltc' component={exampleLTC} />
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </div>

            </HashRouter>
        )
    }
}

module.exports = App;

// todo router
//TODO Add Modal Dialogs in React
// //
// class ExampleApp extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             showModal: false
//         };
//
//         this.handleOpenModal = this.handleOpenModal.bind(this);
//         this.handleCloseModal = this.handleCloseModal.bind(this);
//     }
//
//     handleOpenModal() {
//         this.setState({showModal: true});
//     }
//
//     handleCloseModal() {
//         this.setState({showModal: false});
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleOpenModal}>Trigger Modal</button>
//                 <ReactModal
//                     isOpen={this.state.showModal}
//                     contentLabel="Minimal Modal Example"
//                 >
//                     <button onClick={this.handleCloseModal}>Close Modal</button>
//                 </ReactModal>
//             </div>
//         );
//     }
// }

