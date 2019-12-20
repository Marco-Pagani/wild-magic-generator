defmodule WildMagicTest do
  use ExUnit.Case
  doctest WildMagic

  test "greets the world" do
    assert WildMagic.hello() == :world
  end
end
