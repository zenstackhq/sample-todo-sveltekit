/* eslint-disable */
const metadata = {
    models: {
        space: {
            name: 'Space', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                }, slug: {
                    name: "slug",
                    type: "String",
                }, members: {
                    name: "members",
                    type: "SpaceUser",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'space',
                }, lists: {
                    name: "lists",
                    type: "List",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'space',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, slug: {
                    name: "slug",
                    fields: ["slug"]
                },
            }
            ,
        }
        ,
        spaceUser: {
            name: 'SpaceUser', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, space: {
                    name: "space",
                    type: "Space",
                    isDataModel: true,
                    backLink: 'members',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "spaceId" },
                }, spaceId: {
                    name: "spaceId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'space',
                }, user: {
                    name: "user",
                    type: "User",
                    isDataModel: true,
                    backLink: 'spaces',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, role: {
                    name: "role",
                    type: "SpaceUserRole",
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, userId_spaceId: {
                    name: "userId_spaceId",
                    fields: ["userId", "spaceId"]
                },
            }
            ,
        }
        ,
        user: {
            name: 'User', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, email: {
                    name: "email",
                    type: "String",
                }, password: {
                    name: "password",
                    type: "String",
                }, name: {
                    name: "name",
                    type: "String",
                    isOptional: true,
                }, spaces: {
                    name: "spaces",
                    type: "SpaceUser",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                }, todos: {
                    name: "todos",
                    type: "Todo",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'owner',
                }, lists: {
                    name: "lists",
                    type: "List",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'owner',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, email: {
                    name: "email",
                    fields: ["email"]
                },
            }
            ,
        }
        ,
        list: {
            name: 'List', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, space: {
                    name: "space",
                    type: "Space",
                    isDataModel: true,
                    backLink: 'lists',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "spaceId" },
                }, spaceId: {
                    name: "spaceId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'space',
                }, owner: {
                    name: "owner",
                    type: "User",
                    isDataModel: true,
                    backLink: 'lists',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "ownerId" },
                }, ownerId: {
                    name: "ownerId",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [] }],
                    isForeignKey: true,
                    relationField: 'owner',
                    defaultValueProvider: $default$List$ownerId,
                }, title: {
                    name: "title",
                    type: "String",
                }, private: {
                    name: "private",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, todos: {
                    name: "todos",
                    type: "Todo",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'list',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        todo: {
            name: 'Todo', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, owner: {
                    name: "owner",
                    type: "User",
                    isDataModel: true,
                    backLink: 'todos',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "ownerId" },
                }, ownerId: {
                    name: "ownerId",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [] }],
                    isForeignKey: true,
                    relationField: 'owner',
                    defaultValueProvider: $default$Todo$ownerId,
                }, list: {
                    name: "list",
                    type: "List",
                    isDataModel: true,
                    backLink: 'todos',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "listId" },
                }, listId: {
                    name: "listId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'list',
                }, title: {
                    name: "title",
                    type: "String",
                }, completedAt: {
                    name: "completedAt",
                    type: "DateTime",
                    isOptional: true,
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
    }
    ,
    deleteCascade: {
        space: ['SpaceUser', 'List'],
        user: ['SpaceUser', 'List', 'Todo'],
        list: ['Todo'],
    }
    ,
    authModel: 'User'
};
function $default$List$ownerId(user: any): unknown {
    return user?.id;
}

function $default$Todo$ownerId(user: any): unknown {
    return user?.id;
}
export default metadata;
