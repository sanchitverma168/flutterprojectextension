const {
  PROJECTFOUND,
  NOTFOUND,
  LOL,
  preDefineFlutterValues,
  CREATED,
  ERROR,
  allFoldersCreated,
  workspaceReadSuccess,
  unabletoScan,
  unabletoCreaeFile
} = require('./common');
const colors_dart = ["colors.dart", "import 'package:flutter/material.dart';\n\n class AppColors{ \n }\n"];
const images_dart = ["images.dart", "import 'package:flutter/material.dart';\n\n class AppImages{ \n }\n"];
const shapes_dart = ["shapes.dart", "import 'package:flutter/material.dart';\n\n class AppShapes{ \n }\n"];
const sizes_dart = ["size.dart", "import 'package:flutter/material.dart';\n\n class AppSizes{ \n }\n"];
const strings_dart = ["strings.dart", "import 'package:flutter/material.dart';\n\n class AppStrings{ \n }\n"];
const styles_dart = ["styles.dart", "import 'package:flutter/material.dart';\n\n class AppStyles{ \n }\n"];
const theme_dart = ["theme.dart", "import 'package:flutter/material.dart';\n\n class AppTheme{ \n }\n"];

const dirname_underLIB = ["const", "models", "resources", "ui", "utils", "database", "controllers", "pages", "services", "network", "widgets", "provider"];
const base_client = ["baseClient.dart", "import 'package:flutter/material.dart';\n\n class BaseCLient{ \n }\n"];
const filetomake = [
  [
    colors_dart,
    images_dart,
    shapes_dart,
    sizes_dart,
    strings_dart,
    styles_dart,
    theme_dart
  ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [
    base_client,
  ]
];

module.exports = {
  unabletoCreaeFile,
  unabletoScan,
  workspaceReadSuccess,
  NOTFOUND,
  PROJECTFOUND,
  LOL,
  preDefineFlutterValues,
  CREATED,
  ERROR,
  images_dart,
  sizes_dart,
  dirname_underLIB,
  allFoldersCreated,
  strings_dart,
  theme_dart,
  colors_dart,
  styles_dart,
  shapes_dart,
  filetomake,
  base_client
};