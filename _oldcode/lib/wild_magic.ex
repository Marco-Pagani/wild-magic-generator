defmodule WildMagic do
  @moduledoc """
  Documentation for WildMagic.
  """

  def get_effect do
    {index, effect} = gen_index() |> lookup
    IO.puts("#{index}: #{effect}")
  end

  def get_effect(n) do
    {index, effect} = n |> lookup
    IO.puts("#{index}: #{effect}")
  end

  defp gen_index do
    [0, 0, 0, 0]
    |> Enum.map(fn _ ->
      Enum.random(0..9)
      |> Integer.to_string()
    end)
    |> Enum.join()
  end

  defp lookup(index) do
    [effect] = :ets.lookup(:effects, index)
    effect
  end

  def load_effects do
    :ets.new(:effects, [:set, :protected, :named_table])

    contents = File.read("lib/table20.txt")
    {:ok, contents} = contents

    {myOS, _} = :os.type()

    splitChar =
      if myOS == :win32 do
        # \r for windows machines
        "\r\n"
      else
        "\n"
      end

    contents
    |> String.split(splitChar)
    |> Enum.each(fn x ->
      [key, value] = String.split(x, " ", parts: 2)
      :ets.insert(:effects, {key, value})
    end)
  end
end
