const { Pool } = require('pg')

class PlaylistsService {
  constructor () {
    this._pool = new Pool()
  }

  async getPlaylistwithSongs (userId) {
    const query = {
      text: 'SELECT tblsongs.id, tblsongs.title, tblsongs.performer FROM tblsongs LEFT JOIN tblplaylistsongs ON tblplaylistsongs.song_id = tblsongs.id LEFT JOIN tblplaylists ON tblplaylists.id = tblplaylistsongs.playlist_id LEFT JOIN tblcollaborations ON tblcollaborations.playlist_id = tblplaylists.id WHERE tblplaylists.owner = $1 OR tblcollaborations.user_id = $1',
      values: [userId]
    }

    const result = await this._pool.query(query)
    return result.rows
  }
}

module.exports = PlaylistsService
