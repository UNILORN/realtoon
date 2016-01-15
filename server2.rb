#!/usr/local/bin/ruby
require 'sinatra'
require 'sinatra/cross_origin'
require 'sinatra/jsonp'
enable :cross_origin
#coding: utf-8
require 'fileutils'
require 'json'

print "Access-Control-Allow-Origin: *\n"
print "Content-type: text/plain\n"

#set :bind, '0.0.0.0'

$hash={}

get "/post" do
 erb :realtooo
end


get '/' do
#"#{JSON.generate($hash)}"
json($hash)
end

post '/' do
  @name=params[:name]
  @lat=params[:lat]
  @log=params[:lon]
  $hash={lat:@lat,lon:@log,name:@name}
end

#error do
#    "Y U NO WORK?"
#end

#content_type :json
#data = GPS_Data
#data.to_json

#$GPS_Data = {lat:params[:lat],lon:params[:lon]}
