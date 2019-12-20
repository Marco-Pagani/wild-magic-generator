defmodule WildMagicWeb.PageController do
  use WildMagicWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
