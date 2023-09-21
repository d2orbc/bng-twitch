import { AnalyticsUtils } from 'Global/Utils/AnalyticsUtils';
import React from 'react';
import ReactDOM from 'react-dom';
import "./resets.css";
import { VideoOverlay } from './UI/VideoOverlay/VideoOverlay';

AnalyticsUtils.initOnce();

ReactDOM.render(<VideoOverlay />, document.getElementById('root'));
