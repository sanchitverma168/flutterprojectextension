const PROJECTFOUND = "Flutter Project Found Creating Folders";
const NOTFOUND = "Flutter Project Not Found";
const LOL = "LOL i don't know what is this project directory.";
const preDefineFlutterValues = ["android", "ios", "lib", "pubspec.yaml", "pubspec.lock"];
const CREATED = "Diretory Created Successfuly";
const ERROR = "Directory Already Exists";
const images_dart = ["images.dart", "import 'package:flutter/material.dart';\n\n class AppImages{ \n }\n"];
const sizes_dart = ["size.dart", "import 'package:flutter/material.dart';\n\n class AppSize{ \n }\n"];
const dirname_underLIB = ["const", "models", "resources", "ui", "utils", "database", "controllers", "pages", "services", "network", "packages"];
const dirname_outsideLIB = ["packages"];


module.exports = {
  NOTFOUND,
  PROJECTFOUND,
  LOL,
  preDefineFlutterValues,
  CREATED,
  ERROR,
  images_dart,
  sizes_dart,
  dirname_underLIB,
  dirname_outsideLIB
};