import React from 'react';
import { createRoot } from 'react-dom/client';
import { AllTogetherText } from './AllTogetherComponent';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<AllTogetherText/>);