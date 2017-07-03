
import React from 'react';
import Griddle, {plugins} from 'griddle-react';
import {format} from "../utils/helpers";
import Loading from "./Loading";

import styles from './table.scss';

function VoidLink(props) {
  return <a >{props.displayName || props.columnName}</a>;
}

export default function Table(props) {
  let columnMetadata = props.columnMetadata;
  if (props.columnMetadata) {
    for (let metadata of columnMetadata) {
      if (!metadata.customHeaderComponent && (metadata.sortable === undefined || metadata.sortable!==false)) {
        metadata.customHeaderComponent = VoidLink;
      }
    }
  }

  return <Griddle { ...props }
    columnMetadata={columnMetadata}
    sortDescendingComponent={<span className="caret"></span>}
    sortAscendingComponent={<span className="dropup"><span className="caret"/></span>}
    useGriddleStyles={ false } />;
}

export const LocalTable =(props) => <Table {...props} plugins={[plugins.LocalPlugin]} />;





export const NumberCell = ({value}) => <span>{format.number(value, 0)}</span>;

export const PercentCell = ({value}) => <span>{format.percent(value)}</span>;

export const TableLayout = ({ Table, Pagination, Filter }) => (
  <div>
    <Filter />

    <div className="table-responsive">
      <Table />
    </div>

    <Pagination />
  </div>
);




// enhance cells with row data
// thanks to http://griddlegriddle.github.io/Griddle/examples/getDataFromRowIntoCell/
export const rowDataSelector = (state, { griddleKey }) => {
  return state
    .get('data')
    .find(rowMap => rowMap.get('griddleKey') === griddleKey)
    .toJSON();
};





export class FetchDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchData();
  }

  render () {
    if (!this.state.data) {
      return <Loading />
    } else {
      return <Griddle data={this.state.data}
                      plugins={[plugins.LocalPlugin]}
                      pageProperties={{pageSize: 20}}
                      components={{
                        Layout: TableLayout
                      }}
                      sortProperties={this.sortProperties()}
                      styleConfig={{
                        classNames: {
                          Filter: 'form-control ' + styles.filter,
                          Table: 'table table-hover table-bordered',
                          Pagination: 'form-inline text-center',
                          PageDropdown: 'form-control ' + styles.select,
                          NextButton: 'btn btn-default',
                          PreviousButton: 'btn btn-default',
                          TableHeadingCell: styles.heading,
                        }
                      }}>
        {this.rowDefinition()}
      </Griddle>
    }
  }

  sortProperties() {
    return [
      { id: 'crossref', sortAscending: false },
    ];
  }

  rowDefinition() {
    return <RowDefinition />;
  }

  fetchData() {
    throw new Error('not implemented');
  }
}
