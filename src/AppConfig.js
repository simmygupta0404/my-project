import { format } from "date-fns";
import React from 'react';
import autoChess from "../src/CommonStyles/Icons/Bitmap.png";
import pubg from "../src/CommonStyles/Icons/pic6.png";
import flowFree from "../src/CommonStyles/Icons/free-flow.png";
import garena from "../src/CommonStyles/Icons/garena.png";
import mortal from "../src/CommonStyles/Icons/mortal.png";
import summoners from "../src/CommonStyles/Icons/summoners.png";
import need from "../src/CommonStyles/Icons/need.png";
import shadow from "../src/CommonStyles/Icons/shadow.png";
import price from "../src/CommonStyles/Icons/Price.png";
import file from "../src/CommonStyles/Icons/file.png";
import report from "../src/CommonStyles/Icons/statistics-report.png";
import calender from "../src/CommonStyles/Icons/calendar.png";

export const DATE_FORMAT_v2 = "MMM yyyy, dd";
export const tableCofig = {
    "data": [
        {
            "key": 0,
            "date": "2015-03-25",
            "campaign": "Auto Chess",
            "region": "US",
            "view": "View Pricing",
            "price": {
                "till_one_month": "100",
                "six_month": "500",
                "one_year": "800"
            },
            "csv": "Some CSV link for Whatsapp",
            "report": "Some report link for Whatsapp",
            "image_url": autoChess,
            "schedule": ""
        },
        {
            "key": 1,
            "date": "2015-03-25",
            "campaign": "PUBG MOBILE",
            "region": "US",
            "price": {
                "till_one_month": "100",
                "six_month": "500",
                "one_year": "800"
            },
            "view": "View Pricing",
            "csv": "Some CSV link for Whatsapp",
            "report": "Some report link for Whatsapp",
            "image_url": pubg,
            "schedule": ""
        },
        {
            "key": 2,
            "date": "2015-03-25",
            "campaign": "Flow Free",
            "region": "US",
            "view": "View Pricing",
            "price": {
                "till_one_month": "100",
                "six_month": "500",
                "one_year": "800"
            },
            "csv": "Some CSV link for Whatsapp",
            "report": "Some report link for Whatsapp",
            "image_url": flowFree,
            "schedule": ""
        },
        {
            "key": 3,
            "date": "2015-03-25",
            "campaign": "Garena Free Fire",
            "region": "US",
            "view": "View Pricing",
            "price": {
                "till_one_month": "100",
                "six_month": "500",
                "one_year": "800"
            },
            "csv": "Some CSV link for Whatsapp",
            "report": "Some report link for Whatsapp",
            "image_url": garena,
            "schedule": ""
        },
        {
            "key": 4,
            "date": "2015-03-25",
            "campaign": "MORTAL KOMBAT",
            "region": "US",
            "view": "View Pricing",
            "price": {
                "till_one_month": "100",
                "six_month": "500",
                "one_year": "800"
            },
            "csv": "Some CSV link for Whatsapp",
            "report": "Some report link for Whatsapp",
            "image_url": mortal,
            "schedule": ""
        },
        {
            "key": 5,
            "date": "2020-9-3",
            "campaign": "Summoners War",
            "region": "US",
            "view": "View Pricing",
            "price": {
                "till_one_month": "100",
                "six_month": "500",
                "one_year": "800"
            },
            "csv": "Some CSV link for Whatsapp",
            "report": "Some report link for Whatsapp",
            "image_url": summoners,
            "schedule": ""
        },
        {
            "key": 6,
            "date": "2021-03-25",
            "campaign": "Need For Speed No Limit",
            "region": "US",
            "view": "View Pricing",
            "price": {
                "till_one_month": "100",
                "six_month": "500",
                "one_year": "800"
            },
            "csv": "Some CSV link for Whatsapp",
            "report": "Some report link for Whatsapp",
            "image_url": need,
            "schedule": ""
        },
        {
            "key": 7,
            "date": "2021-03-25",
            "campaign": "Shadow Fight 3",
            "region": "US",
            "view": "View Pricing",
            "price": {
                "till_one_month": "100",
                "six_month": "500",
                "one_year": "800"
            },
            "csv": "Some CSV link for Whatsapp",
            "report": "Some report link for Whatsapp",
            "image_url": shadow,
            "schedule": ""
        }

    ]
}

export const vehicleImageUploadHeader = [
    {
        label: "Date",
        name: "date",
        renderCallback: (rowData) => {
            let date = format(new Date(rowData.date), DATE_FORMAT_v2);
            const today = new Date();
            const date2 = new Date(date);
            const diffTime = today < date2 ? Math.abs(date2 - today) : Math.abs(today - date2);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            return <div className="date">
                <div>
                    <div className="date-data">{date}</div>
                    <div className="date-desc">{diffDays} days {today < date2 ? "ahead" : "ago"}</div>
                </div>
            </div>

        }
    },
    {
        label: "Campaign",
        name: "campaign",
        renderCallback: (rowData) => {
            return <div className="campaign-wrapper">
                <div className="campaign">
                    <img src={rowData.image_url} className="campaign-img" alt="logo" />
                    <div>
                        <div className="campaign-data">{rowData.campaign}</div>
                        <div className="campaign-region">{rowData.region}</div>
                    </div>
                </div>
            </div>

        }
    },
    {
        label: "View",
        name: "view",
        renderCallback: (rowData) => {
            return <div className="view">
                <img src={price} className="view-img" alt="logo" />
                <div className="view-data">{rowData.view}</div>
            </div>

        }
    },
    {
        label: "Action",
        name: "report",
        renderCallback: (rowData) => {
            return <div className="report">
                <div className="view">
                    <img src={file} className="view-img" alt="logo" />
                    <div className="view-data">CSV</div>
                </div>
                <div className="view">
                    <img src={report} className="view-img" alt="logo" />
                    <div className="view-data">Report</div>
                </div>
            </div>

        }
    },
    {
        label: "",
        name: "schedule",
        renderCallback: (rowData) => {
            return <div className="report">
                <div className="view">
                    <img src={calender} className="view-img" alt="logo" />
                    <div className="view-data" >Schedule Again</div>
                </div>
                <div>{() => this.props.showCalender(rowData)}</div>
            </div>

        }
    }

];