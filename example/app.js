import 'jstree/dist/themes/default/style.min.css';
import 'jstree/dist/themes/default-dark/style.min.css';

import ReactDOM from 'react-dom';
import ReactTree from '../src/react-tree';
import { PROJECT_TREE } from './project-tree';

const CORE_DATA = {
  data: PROJECT_TREE
};

class ExampleApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };

    this.handleOnChanged = this.handleOnChanged.bind(this);
  }

  handleOnChanged(changedItems) {
    this.setState({
      items: changedItems.map(item => item.text).join(', ')
    });
  }

  render() {
    return (
      <div>
        <ReactTree core={CORE_DATA} onChanged={this.handleOnChanged} />
        <div>Selected items: {this.state.items}</div>
      </div>
    );
  }
}

ReactDOM.render(<ExampleApp />, document.getElementById('app'));
