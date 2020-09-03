import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './DataTable.scss';

class DataTableRowItem extends React.PureComponent {
    onDataClick = () => {
        if(this.props.value === "view"){
            console.log("hi")
            this.props.onViewClick();
        }
        if(this.props.value === "schedule"){
          console.log("hi")
          this.props.onScheduleClick();
      }

        
    }
  render() {
    const { children, className } = this.props;
    return <div onClick = {this.onDataClick}className={cx("TableRowItem", className)}>{children}</div>;
  }
}

DataTableRowItem.propTypes = {
  className: PropTypes.string,
};
DataTableRowItem.defaultProps = {
  className: '',
};

export default DataTableRowItem;
