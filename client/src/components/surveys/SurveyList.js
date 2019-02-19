import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends React.Component{

  componentDidMount(){
    this.props.fetchSurveys();
  }

  renderSurveyList(){
      return this.props.surveys.reverse().map((survey) => {
        return (
        <div class="card blue-grey darken-1" key={ survey._id }>
        <div class="card-content white-text">
          <span class="card-title">{ survey.title }</span>
          <p>{ survey.body }</p>
          <p className="right">
            Sent On: { new Date(survey.dateSent).toLocaleDateString() }
          </p>
        </div>
        <div class="card-action">
          <a>Yes: { survey.yes }</a>
          <a>No: { survey.no }</a>
        </div>
      </div>
        );
      });
  }

  render(){
    return (
        <div>{ this.renderSurveyList() }</div>
    );
  }
};

function mapStateToProps({ surveys }){
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);

