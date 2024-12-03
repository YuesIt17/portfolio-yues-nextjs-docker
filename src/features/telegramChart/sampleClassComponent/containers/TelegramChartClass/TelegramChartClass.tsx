import React from 'react';
import {ChartAction} from '../../../store/basic/actions';
import {reducer} from '../../../store/basic/reducer';
import {TelegramChartFooter, TelegramChartLine} from '../../../components';
import {TTelegramChartLine} from '../../../components/TelegramChartLine/types';
import {TTelegramChart} from '../../../containers/TelegramChart/types';
import {useStyles} from '../../../containers/TelegramChart/styles';
import {TChartClassData} from './types';
import {PEDDING_CHART_SIZE} from '../../../constants';
import {SerializedStyles} from '@emotion/react';
import {TChartDataLabel, TChartDataLine} from '@/utils/types';
import {prepareData} from '@/utils';
import {mockDataChart} from '@/api/telegramChart/mockDataChart';

export class TelegramChartClass extends React.Component<
  TTelegramChart,
  TTelegramChartLine
> {
  styles: {chart: SerializedStyles};

  constructor(props: TTelegramChart) {
    super(props);
    const width = props.width;
    this.styles = useStyles({width});
    this.state = {
      data: [] as TChartDataLine[],
      maxDataX: 0,
      maxDataY: 0,
      labelsX: [] as TChartDataLabel[],
      labelsY: [] as TChartDataLabel[],
      width: width,
    };
    this.dispatch = this.dispatch.bind(this);
    this.onChangeHadler = this.onChangeHadler.bind(this);
  }

  dispatch = ({
    action,
    payload,
  }: {
    action: ChartAction;
    payload: TChartClassData;
  }) => {
    const data = reducer(this.state.data, {
      type: action,
      payload: payload.lines,
    });
    this.setState({data: data, ...payload});
  };

  componentDidMount() {
    const dataChart = prepareData(mockDataChart);
    this.dispatch({action: ChartAction.setAll, payload: dataChart});
  }

  componentWillUnmount() {
    this.dispatch({
      action: ChartAction.setAll,
      payload: {lines: [], labelsX: [], labelsY: [], maxDataX: 0, maxDataY: 0},
    });
  }

  onChangeHadler = (line: TChartDataLine, isVisible: boolean) => {
    this.dispatch({
      action: ChartAction.updateOne,
      payload: {lines: {...line, isVisible: isVisible}} as TChartClassData,
    });
  };

  render() {
    return (
      <div css={this.styles.chart} data-testid="telegramChartClass">
        <TelegramChartLine
          data={this.state.data}
          maxDataX={this.state.maxDataX}
          maxDataY={this.state.maxDataY}
          labelsX={this.state.labelsX}
          labelsY={this.state.labelsY}
          peddingSize={PEDDING_CHART_SIZE}
        />
        <TelegramChartFooter
          data={this.state.data}
          onChange={this.onChangeHadler}
        />
      </div>
    );
  }
}
