#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { SampleCdkSampleAppStack } from '../lib/sample-cdk-sample-app-stack';

const app = new cdk.App();
new SampleCdkSampleAppStack(app, 'SampleCdkSampleAppStack');
