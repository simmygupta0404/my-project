import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import ReactModal from "react-modal";
import "./PriceModal.scss";

class PriceModal extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.isOpen
        };
    }
    openModal = () => {
        this.setState({
            isOpen: true
        });
    }
    closeModal = () => {
        this.props.onCloseCallback();
        this.setState({
            isOpen: false
        });
    }
    render() {
        let rowData = this.props.rowData
        return (
            <ReactModal
                isOpen={this.state.isOpen}
                portalClassName={cx("ReactModalPortalMiddle__V2", this.props.portalClassName)}
                htmlOpenClassName="ReactModal__Html--open__V2"
                overlayClassName="ReactModal__Overlay__V2"
                className={
                    cx("Content__V2 Content__V2--center Content__V2--center--dimension", this.props.className)}
            >
                <div className="modal">
                    <div className="modal__body">
                        <div className="campaign">
                            <img src={rowData.image_url} className="campaign-img" alt="logo" />
                            <div className="in-center">
                                <div className="campaign-data">{rowData.campaign}</div>
                                <div className="campaign-region">{rowData.region}</div>
                            </div>
                        </div>
                        <div className="pricing">Pricing</div>
                        <div className="pricing-data">
                            <div className="pricing-data-key">1 Week - 1 Month</div><div className="pricing-data-value">$ {rowData.price.till_one_month}</div>
                        </div>
                        <div className="pricing-data">
                            <div className="pricing-data-key">6 Months</div><div className="pricing-data-value">$ {rowData.price.six_month}</div>
                        </div>
                        <div className="pricing-data">
                            <div className="pricing-data-key">1 Year</div><div className="pricing-data-value">$ {rowData.price.one_year}</div>
                        </div>
                        <div className="close-modal">
                            <button className="close-modal-button" onClick={this.closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </ReactModal>
        )
    }
}

PriceModal.propTypes = {
    portalClassName: PropTypes.string,
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    children: PropTypes.node,
    title: PropTypes.string,
    onCloseCallback: PropTypes.func
};

PriceModal.defaultProps = {
    portalClassName: "",
    className: "",
    isOpen: false,
    title: "",
    onCloseCallback: () => { }
};

export default (PriceModal);