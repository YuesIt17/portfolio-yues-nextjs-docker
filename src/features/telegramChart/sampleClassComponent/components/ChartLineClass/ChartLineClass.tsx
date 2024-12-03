import React from 'react';
import {TChartLine} from '../../../components/ChartLine/types';

type TChartLineState = Pick<TChartLine, 'fill' | 'isVisible'>;

export class ChartLineClass extends React.Component<
  TChartLine,
  TChartLineState
> {
  constructor(props: TChartLine) {
    super(props);
    this.state = {
      isVisible: this.props.isVisible,
      fill: 'none',
    };
  }

  shouldComponentUpdate(nextProps: TChartLine, nextState: TChartLineState) {
    return (
      this.state.isVisible !== nextState.isVisible ||
      this.props.isVisible !== nextProps.isVisible
    );
  }

  componentDidUpdate(prevProps: TChartLine) {
    if (this.props.isVisible !== prevProps.isVisible) {
      this.setState({isVisible: this.props.isVisible});
    }
  }

  render() {
    if (!this.state.isVisible) return null;
    return (
      <polyline
        fill={this.state.fill}
        stroke={this.props.stroke}
        points={this.props.points}
      />
    );
  }
}
