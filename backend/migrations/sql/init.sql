-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    display_name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE users IS 'User table storing authentication details';
COMMENT ON COLUMN users.email IS 'User email (must be unique)';
COMMENT ON COLUMN users.display_name IS 'User display name';

-- Rooms Table
CREATE TABLE IF NOT EXISTS rooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT UNIQUE NOT NULL,
    owner_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE rooms IS 'Rooms table to group chat conversations';
COMMENT ON COLUMN rooms.name IS 'Unique name of the chat room';
COMMENT ON COLUMN rooms.owner_id IS 'Owner of the chat room';

-- Chat History Table
CREATE TABLE IF NOT EXISTS chat_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    room_id UUID NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    response TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE chat_history IS 'Table storing chat messages within rooms';
COMMENT ON COLUMN chat_history.room_id IS 'The room where the chat took place';
COMMENT ON COLUMN chat_history.user_id IS 'The user who sent the message';
COMMENT ON COLUMN chat_history.question IS 'The question asked by the user';
COMMENT ON COLUMN chat_history.response IS 'The AI-generated response';

