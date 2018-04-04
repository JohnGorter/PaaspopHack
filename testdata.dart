import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:async';
import 'dart:io';
import 'dart:math';
import 'package:crypto/crypto.dart' as crypto;


main() async {
 var timer =  new Timer.periodic(const Duration(seconds: 5), (Timer t) =>  postUrl());
}

function postUrl(){
  int mood = (new Random().nextInt(3)) + 1;
  String url = "https://us-central1-votes-app.cloudfunctions.net/cammood?camid=cam05&mood=$mood";
  print("posting $url");
  new http.Request("GET", Uri.parse(url)).send(); 
}