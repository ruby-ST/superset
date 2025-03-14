/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Re-exporting of components in src/components to facilitate
 * their imports by other components.
 * E.g. import { Select } from 'src/components'
 */
export { default as Select } from './Select/Select';
export { default as AsyncSelect } from './Select/AsyncSelect';
export { default as Button } from './Button';
export { default as Card } from './Card';

// Vanilla Ant Design components from v5
export {
  AutoComplete,
  Col,
  Grid,
  Layout,
  Row,
  Skeleton,
  Tag,
  Tree,
  TreeSelect,
  Typography,
} from 'antd-v5';

// Vanilla Ant Design components from v4 that require migration
export { Upload } from 'antd';

/*
 * Components that conflict with the ones in src/components.
 * We should try to avoid using Ant Design directly. The components
 * listed below may need review. Avoid incrementing this list by using
 * or extending the components in src/components.
 */
export {
  Breadcrumb as AntdBreadcrumb, // TODO: Make this a real Component
  Checkbox as AntdCheckbox,
  Collapse as AntdCollapse,
  Form as AntdForm,
  Select as AntdSelect,
} from 'antd';

// Exported types
export type { FormInstance } from 'antd/lib/form';
export type { RadioChangeEvent } from 'antd/lib/radio';
