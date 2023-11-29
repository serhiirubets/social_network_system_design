
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/v1/users": {
        "get": {
          "operationId": "UserController_getAll",
          "parameters": [],
          "responses": {
            "201": {
              "description": "Get all users.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/UserProfileResponseDto"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Users"
          ]
        }
      },
      "/v1/users/{userId}/profile": {
        "get": {
          "operationId": "UserController_getById",
          "parameters": [
            {
              "name": "userId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Get user profile by id.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserProfileResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "Users"
          ]
        }
      },
      "/v1/users/{userId}/friends": {
        "get": {
          "operationId": "UserController_getFriendsById",
          "parameters": [
            {
              "name": "userId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Get user friends by user id",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserProfileResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "Users"
          ]
        }
      },
      "/v1/users/{userId}/invite_friend": {
        "post": {
          "operationId": "UserController_inviteFriend",
          "parameters": [
            {
              "name": "userId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SendUserInvitationRequestDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Users"
          ]
        }
      },
      "/v1/users/{userId}/delete_friend/{friendId}": {
        "delete": {
          "operationId": "UserController_deleteFriend",
          "parameters": [
            {
              "name": "userId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "friendId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Users"
          ]
        }
      },
      "/v1/chat/{chatId}": {
        "get": {
          "operationId": "ChatController_getChatById",
          "parameters": [],
          "responses": {
            "201": {
              "description": "Get chat by id.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetChatResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "Chats"
          ]
        }
      },
      "/v1/chat/{userId}": {
        "get": {
          "operationId": "ChatController_getChatsByUserId",
          "parameters": [],
          "responses": {
            "201": {
              "description": "Get all chats by user id.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetChatResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "Chats"
          ]
        }
      },
      "/v1/posts": {
        "post": {
          "operationId": "PostController_createPost",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreatePostRequestDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Posts"
          ]
        }
      },
      "/v1/posts/{postId}/add-media": {
        "post": {
          "operationId": "PostController_addMedia",
          "parameters": [
            {
              "name": "postId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddMediaRequestDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Posts"
          ]
        }
      },
      "/v1/feed/{userId}": {
        "get": {
          "operationId": "NewsFeedController_getFeedByUserId",
          "parameters": [
            {
              "name": "userId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Get feed by user id",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetFeedResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "News Feed"
          ]
        }
      },
      "/v1/feed/{feedId}/add-post": {
        "post": {
          "operationId": "NewsFeedController_addPost",
          "parameters": [
            {
              "name": "feedId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddFeedRequestDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "News Feed"
          ]
        }
      },
      "/v1/feed/{feedId}/delete-post/{postId}": {
        "delete": {
          "operationId": "NewsFeedController_deletePost",
          "parameters": [
            {
              "name": "feedId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "postId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "News Feed"
          ]
        }
      },
      "/v1/upload": {
        "post": {
          "operationId": "UploadController_uploadFile",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "file": {
                      "type": "string",
                      "format": "binary"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Upload file.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/UploadFileResponseDto"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Upload"
          ]
        }
      }
    },
    "info": {
      "title": "Social App",
      "description": "Social network API description",
      "version": "1.0",
      "contact": {}
    },
    "tags": [],
    "servers": [],
    "components": {
      "schemas": {
        "UserProfileResponseDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "firstName": {
              "type": "string"
            },
            "secondName": {
              "type": "string"
            },
            "avaSrc": {
              "type": "string"
            },
            "shortDescription": {
              "type": "string"
            },
            "location": {
              "type": "string"
            },
            "lastSeen": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "id",
            "firstName",
            "secondName",
            "avaSrc",
            "shortDescription",
            "location",
            "lastSeen"
          ]
        },
        "SendUserInvitationRequestDto": {
          "type": "object",
          "properties": {
            "inviteeId": {
              "type": "string"
            }
          },
          "required": [
            "inviteeId"
          ]
        },
        "GetChatResponseDto": {
          "type": "object",
          "properties": {}
        },
        "CreatePostRequestDto": {
          "type": "object",
          "properties": {
            "authorId": {
              "type": "string"
            },
            "text": {
              "type": "string"
            },
            "Attachments ids": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "visibility": {
              "type": "string",
              "enum": [
                "PUBLIC",
                "ONLY_FRIENDS",
                "CUSTOM"
              ]
            }
          },
          "required": [
            "authorId",
            "text",
            "Attachments ids",
            "visibility"
          ]
        },
        "AddMediaRequestDto": {
          "type": "object",
          "properties": {
            "fileId": {
              "type": "string"
            }
          },
          "required": [
            "fileId"
          ]
        },
        "GetFeedResponseDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "title": {
              "type": "string"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "text": {
              "type": "string"
            },
            "likesCount": {
              "type": "number"
            },
            "comments": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "shareCount": {
              "type": "number"
            },
            "viewedCount": {
              "type": "number"
            },
            "attachments": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "media": {
              "type": "object"
            }
          },
          "required": [
            "id",
            "title",
            "createdAt",
            "text",
            "likesCount",
            "comments",
            "shareCount",
            "viewedCount",
            "attachments",
            "media"
          ]
        },
        "AddFeedRequestDto": {
          "type": "object",
          "properties": {
            "PostId": {
              "type": "string"
            }
          },
          "required": [
            "PostId"
          ]
        },
        "UploadFileResponseDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "fileName": {
              "type": "string"
            },
            "fileUrl": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "fileName",
            "fileUrl"
          ]
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
