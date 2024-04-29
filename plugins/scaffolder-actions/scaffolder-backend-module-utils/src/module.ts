/*
 * Copyright 2024 Larder Software Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { createBackendModule } from '@backstage/backend-plugin-api';
import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';
import * as backendModuleUtils from './actions';

/**
 * @public
 * The Roadie Module for the Scaffolder Backend
 */
export const scaffolderBackendModuleUtils = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'scaffolder-backend-module-utils',
  register({ registerInit }) {
    registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
      },
      async init({ scaffolder }) {
        scaffolder.addActions(
          backendModuleUtils.createAppendFileAction(),
          backendModuleUtils.createJSONataAction(),
          backendModuleUtils.createJsonJSONataTransformAction(),
          backendModuleUtils.createMergeAction(),
          backendModuleUtils.createMergeJSONAction({}),
          backendModuleUtils.createParseFileAction(),
          backendModuleUtils.createReplaceInFileAction(),
          backendModuleUtils.createSerializeJsonAction(),
          backendModuleUtils.createSerializeYamlAction(),
          backendModuleUtils.createSleepAction(),
          backendModuleUtils.createWriteFileAction(),
          backendModuleUtils.createYamlJSONataTransformAction(),
          backendModuleUtils.createZipAction(),
        );
      },
    });
  },
});
