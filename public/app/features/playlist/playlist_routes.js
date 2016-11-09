/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","app/core/config","lodash"],function(a){"use strict";var b=a.module("grafana.routes");b.config(["$routeProvider",function(a){a.when("/playlists",{templateUrl:"public/app/features/playlist/partials/playlists.html",controllerAs:"ctrl",controller:"PlaylistsCtrl"}).when("/playlists/create",{templateUrl:"public/app/features/playlist/partials/playlist.html",controllerAs:"ctrl",controller:"PlaylistEditCtrl"}).when("/playlists/edit/:id",{templateUrl:"public/app/features/playlist/partials/playlist.html",controllerAs:"ctrl",controller:"PlaylistEditCtrl"}).when("/playlists/play/:id",{templateUrl:"public/app/features/playlist/partials/playlists.html",controllerAs:"ctrl",controller:"PlaylistsCtrl",resolve:{init:["playlistSrv","$route",function(a,b){var c=b.current.params.id;a.start(c)}]}})}])});