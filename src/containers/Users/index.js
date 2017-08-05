import React from 'react';
import { ScrollView, ListView } from 'react-native';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetch } from './actions';
import { selectUsers, selectIsLoading, selectIsFetched } from './selectors';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Preloader from '../../components/Preloader';
import Card from '../../components/Card';
import Button from '../../components/Button';


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.users !== nextProps.users) {

      this.setState({
        dataSource: ds.cloneWithRows(nextProps.users)
      });
    }
  }

  render() {
    const { isLoading, isFetched, onUsersFetch } = this.props;

    return (
      <Container>
        <Header>US Presidents List</Header>
        {isLoading && <Preloader />}
        <ScrollView>
          <ListView
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={user => {
              return (
                <Card data={user} />
              );
            }}>
          </ListView>
          {!isFetched && <Button onPress={onUsersFetch}>Fetch</Button>}
        </ScrollView>
      </Container>
    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    users: selectUsers(),
    isLoading: selectIsLoading(),
    isFetched: selectIsFetched()
  });
}

function mapDispatchToProps(dispatch) {
  return {
    onUsersFetch: () => {
      dispatch(fetch());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
