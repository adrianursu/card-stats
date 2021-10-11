import Card from './Card'
import Row from './Row'
import Container from './Container'
import './App.css';


function App() {
  return (
    <Container>
      <Row>

        <Card
          title="New Users"
          count="5234"
          icon="fas fa-user-friends"
          iconColor="success"
          footerIcon="fa fa-arrow-down"
          footerIconColor="success"
          percentage="50%"
          footerText="Since last week"
        />

        <Card
          title="Bugs"
          count="80"
          icon="fas fa-bug"
          iconColor="danger"
          footerIcon="fas fa-exclamation-triangle"
          footerIconColor="danger"
          percentage="80%"
          footerText="Help!"
        />

      </Row>
    </Container>
  );
}

export default App;
