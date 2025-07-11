CREATE TABLE "posts" (
    'id' BLOB PRIMARY KEY CHECK(is_uuid_v7(id)) DEFAULT (uuid_v7()) NOT NULL,
    'content' TEXT DEFAULT '',
    'title' TEXT DEFAULT ''
) STRICT;