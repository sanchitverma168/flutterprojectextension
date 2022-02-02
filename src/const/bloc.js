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
} = require('./common.js');
const colors = ["colors.dart", "import 'package:flutter/material.dart';\n\nclass AppColors{ \n // This file declares all the colors used in file.\n}\n"];
const config = ["config.dart", "import 'strings.dart';\n\nclass Config{ \n\tConfig();\n \t // This file declares all the config used in file.}\n \tstatic const String _server = \"\";\n\tstatic String _keyValue(String key, String value) {\n\t\treturn key + _equalto + value;\n\t}\n\tstatic const String _questionmark = \" ? \";\n\tstatic const String _ampersand = \" & \";\n\tstatic const String _equalto = \" = \";\n}"];
const const_file = ["const.dart", "export 'config.dart';\n\n \t// Declare here all enums and static string,arrays,map\n"];
const extension = ["extension.dart", "import 'package:flutter/widgets.dart';\n\n // Declare all extensions made in the application.\n"];
const globals = ["globals.dart", "library globals.dart; \n\n // Declare all global static variables which are fetched from the server for configuratio of the file"];
const images = ["images.dart", "import 'package:flutter/material.dart';\n\n class AppImages{ \n }\n\n\n class AppSVG{ \n }\n"];
const sizes = ["size.dart", "import 'package:flutter/material.dart';\n\n class AppSizes{ \n }\n"];
const strings = ["strings.dart",
  "\tint one = 1;\n\tint two = 2;\n\tint three = 3;\n\tint four = 4;\n\tint five = 5;\n\tint six = 6;\n\tint seven = 7;\n\tint eight = 8;\n\tint nine = 9;\n\tint zero = 0;\n\tString loadingt = \"Loading ....\";\n\tString dashboard = \"Dashboard\";\n\tString aboutus = \"About Us\";"
];
const styles = ["styles.dart", "import 'package:flutter/material.dart';\n\n class AppStyles{ \n }\n"];
const themes = ["theme.dart", "import 'package:flutter/material.dart';\n\n class AppTheme{ \n }\n"];
const database = ["database.dart", "import 'dbimport.dart';\n\n// add `floor` library in pubspec.yaml file\nimport 'package:sqflite/sqflite.dart' as sqflite;\npart 'database.g.dart';\n\n@Database(version: 1, entities: [])\nabstract class AppDatabase extends FloorDatabase {}"];
const dbimport = ["dbimport.dart", "export 'dart:async';\n\n// add `floor` library in pubspec.yaml file\nexport 'package:floor/floor.dart';"];
const app_en = ["app_en.arb", "{\t\"title\": \"Dashboard\",\n\t\"search\"\t:\t\"Search\",\n}"];
const app_hi = ["app_hi.arb", "{\t\"title\": \"डैशबोर्ड\",\n\t\"search\"\t:\t\"खोज\",\n}"];
const appconfigrepo = ["app_config_repo.dart", "import 'repo.dart';\nclass ApplicationHandleRepo implements Repository {\n\t// This file get the app configurable data from server.\n\n\t@override\n\tFuture fetchOrReadAndReturn({bool offline = false}) async {\n\t\treturn offline ? await _readDataFromFile() : await _fetchFromServer();\n\t}\n\n\t_fetchFromServer(){}\n\n\t_readDataFromFile(){}\n}"];
const repo = ["repo.dart", "abstract class Repository {\n\tFuture fetchOrReadAndReturn({bool offline = false});\n\t}"];
const dashboard = ["dashboard_screen.dart", "import 'package:flutter/material.dart';\n\n\t class DashboardScreen extends StatelessWidget {\n\t const DashboardScreen({\n\t Key ? key\n\t}): super(key: key);\n\t\n\t  @override\n\t  Widget build(BuildContext context) {\n\t    return Container();\n\t  }\n\t}"];
const sign_in = ["sign_in_screen.dart", "import 'package:flutter/material.dart';\n\n\t class SignInScreen extends StatelessWidget {\n\t const SignInScreen({\n\t Key ? key\n\t}): super(key: key);\n\t\n\t  @override\n\t  Widget build(BuildContext context) {\n\t    return Container();\n\t  }\n\t}"];
const sign_up = ["sign_up_screen.dart", "import 'package:flutter/material.dart';\n\n\t class SignUpScreen extends StatelessWidget {\n\t const SignUpScreen({\n\t Key ? key\n\t}): super(key: key);\n\t\n\t  @override\n\t  Widget build(BuildContext context) {\n\t    return Container();\n\t  }\n\t}"];
const profile = ["profile_screen.dart", "import 'package:flutter/material.dart';\n\n\t class ProfileScreen extends StatelessWidget {\n\t const ProfileScreen({\n\t Key ? key\n\t}): super(key: key);\n\t\n\t  @override\n\t  Widget build(BuildContext context) {\n\t    return Container();\n\t  }\n\t}"];
const account = ["account_screen.dart", "import 'package:flutter/material.dart';\n\n\t class AccountScreen extends StatelessWidget {\n\t const AccountScreen({\n\t Key ? key\n\t}): super(key: key);\n\t\n\t  @override\n\t  Widget build(BuildContext context) {\n\t    return Container();\n\t  }\n\t}"];
const appexceptionsservice = ["app_exceptions_services.dart", "\n\n\n\n\n\t// Handle here app exception "];
const authservice = ["auth_services.dart", "\n\n\n\n\n\t// Handle here auth service "];
const baseclientservice = ["baseclient_services.dart", "\n\n\n\n\n\t// Handle here base client \n\t//delcare here http methods get,post ,put,delete,patch \n\t//with parameters callable from different repo "];
const dbservices = ["db_services.dart", "\n\n\n\n\n\t// Handle here db services  for sqlite"];
const fileservices = ["file_services.dart", "\n\n\n\n\n\t// Handle here file services  read and write for local storaage"];
const internetservices = ["internet_services.dart", "\n\n\n\n\n\t// Handle here internet connection check or internet status stream "];
const miscservices = ["misc_services.dart", "\n\n\n\n\n\t// Handle here app misc service like for example firebase "];
const permissionservices = ["permission_handle_services.dart", "\n\n\n\n\n\t// Handle various Permission for sensor or for device features."];
const sharedprefhandle = ["shared_pref_handle.dart", "\n\n\n\n\n\t// Handle here Shared preferences for the local data."];
const error = ["error_widget.dart", "import 'package:flutter/material.dart';\n\nclass ErrorWidget extends StatelessWidget {\n\tconst ErrorWidget({Key? key}) : super(key: key);\n\n\t@override\n\tWidget build(BuildContext context) {\n\t\treturn Container();\n\t}\n}"];
const loading = ["loading_widget.dart", "import 'package:flutter/material.dart';\n\nclass LoadingWidget extends StatelessWidget {\n\tconst LoadingWidget({Key? key}) : super(key: key);\n\n\t@override\n\tWidget build(BuildContext context) {\n\t\treturn Container();\n\t}\n}"];
const blocfolderstocreate = ["bloc", "config", "db", "l10n", "models", "repository", "screens", "services", "widgets"];
const blocfilescreate = [
  [],
  [colors,
    config,
    const_file,
    extension,
    globals,
    images,
    sizes,
    strings,
    styles,
    themes
  ],
  [database, dbimport],
  [app_en, app_hi],
  [],
  [appconfigrepo, repo],
  [dashboard, sign_in, sign_up, profile, account],
  [appexceptionsservice, authservice, baseclientservice, dbservices, fileservices, internetservices, miscservices, permissionservices, sharedprefhandle],
  [error, loading]
];
module.exports = {
  blocfilescreate,
  blocfolderstocreate,
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
}